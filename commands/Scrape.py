import requests

# Replace 'YOUR_SUBREDDIT_NAME' with the subreddit you want to scrape
subreddit = "Foot_Island"
url = f"https://www.reddit.com/r/{subreddit}/hot.json"

# Send a GET request to the Reddit API URL
response = requests.get(
    url,
    headers={
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    },
)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Parse the JSON content of the response
    data = response.json()

    # Example: Extract information from the JSON response
    for post in data["data"]["children"]:
        title = post["data"]["title"]
        url = post["data"]["url"]
        print(f"{url}")
else:
    print(f"Error: {response.status_code}")
