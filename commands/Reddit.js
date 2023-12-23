import {
    ActionRowBuilder,
    ButtonBuilder,
    EmbedBuilder,
    ButtonStyle,
    PermissionsBitField
  } from 'discord.js'
  import randColor from './RandColor.js'
  import fetch from 'node-fetch'
  let msgAuthor, interact
  
  async function deletePost (i) {
    // If user is the author of the post or a mod, remove the post
    // prettier-ignore
    if (i.channel !== null)
        if (i.user.id === msgAuthor || i.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) {
          await i.message.delete().catch(async err => {
            console.log(err);
            return await i.reply({
              content: `${i.user}, an error occured while removing the post!`,
              ephemeral: true,
            })
          });
          return await i.reply({
            content: `${i.user}, post has been removed!`,
            ephemeral: true,
          });
        }
  
    // If user is not the author of the post or a mod, send warning
    await i.reply({
      content: `${i.user}, unable to remove post! You must be the author or a moderator! (Cannot remove posts from dms)`,
      ephemeral: true
    })
  }
  async function reddit (subreddit, interaction, nsfw) {
    // Check if channel does not exist, not an nsfw channel and an nsfw command
    if (interaction.channel !== null && !interaction.channel.nsfw && nsfw)
      return await interaction.reply(
        `${interaction.user}, channel is not marked as NSFW!`
      )
    msgAuthor = interaction.user.id // Interaction author for deletePost
    interact = interaction // Interaction for deletePost
  
    try {
      let post, image, isGallery // Variables
      await fetch(
        //Create request
        `https://api.allorigins.win/raw?url=https://www.reddit.com/r/${subreddit}/hot.json`,
        {
          method: 'GET',
          headers: {
            'User-Agent':
              'web:com.goddessx.myredditapp:v0.39.91 (by u/intensifiesx)'
          }
        }
      )
        .then(response => response.json())
        .then(body => {
          // Get response body
          post = // Get random post
            body.data.children[
              Math.floor(Math.random() * body.data.children.length)
            ].data
          image = post.url // Get image url
          isGallery = post.is_gallery // Get if post is a gallery
  
          // Obtain new post if post is a gallery, comment post, or discord link
          while (
            isGallery ||
            image.startsWith('https://www.reddit.com/r/') ||
            image.startsWith('https://discord.gg/')
          ) {
            console.log('Obtaining new post');
            post =
              body.data.children[
                Math.floor(Math.random() * body.data.children.length)
              ].data
            image = post.url
            isGallery = post.is_gallery
        }
      })
  
      // Get post details
      var button = new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setLabel('Link')
            .setStyle(ButtonStyle.Link)
            .setURL(`https://www.reddit.com${post.permalink}`),
          new ButtonBuilder()
            .setLabel('Remove')
            .setStyle(ButtonStyle.Danger)
            .setCustomId('deletePost')
        ),
        title = post.title.slice(0, 255),
        isVideo = post.is_video,
        author = post.author,
        ups = post.ups,
        isBad = false
  
      // If post is a video, set isBad to true and get fallback url
      if (isVideo || image.indexOf('https://v.') > -1) {
        isBad = true
        image = post.media.reddit_video.fallback_url
      } else
        [
          // Check if image has these keywords
          '.gifv',
          'redgifs',
          'https://www.pornhub.com/',
          'https://imgur.com/a',
          'youtu',
          '/comments',
          'gfycat'
        ].forEach(bad => {
          // If image has keyword, set isBad to true
          if (image.indexOf(bad) > -1) isBad = true
        })
  
      title = `\"${title}\"`
  
      // If isBad is true, send regular message
      if (isBad)
        await interaction.reply({
          components: [button],
          content: `${title}\n✏️ **Posted by:** ${author} | :arrow_up: **Upvotes:** ${ups}\n**Provided by r/**${subreddit}\n${image}`
        })
      // else send embed
      else
        await interaction.reply({
          components: [button],
          embeds: [
            new EmbedBuilder()
              .setColor(randColor())
              .setTitle(`${title}`)
              .setDescription(
                `✏️ **Posted by:** ${author}‎\n:arrow_up: **Upvotes:**  ${ups}`
              )
              .setImage(`${image}`)
              .setTimestamp()
              .setFooter({
                text: `Provided by r/${subreddit}`,
                iconURL: interaction.user.avatarURL()
              })
          ]
        })
  
      // Wait 120 seconds until the remove button is deleted
      setTimeout(async () => {
        await interaction
          .editReply({
            components: [
              new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                  .setLabel('Link')
                  .setStyle(ButtonStyle.Link)
                  .setURL(`https://www.reddit.com${post.permalink}`)
              )
            ]
          })
          .catch(err => {})
      }, 120000)
    } catch (e) {
      console.log(e)
    }
  }
  export { reddit, deletePost }