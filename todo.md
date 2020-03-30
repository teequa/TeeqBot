# Todo list for TeeBot

### Missing features
- unban command
- presence event
- command handler
- embed handler (?)

### Main feature

Twitch notification list based on "streaming" presence of user (owner/specified users).
This will push a MessageEmbed to the appointed channel for notifications with the assigned _notification role_ mentions.

- use _polling_ to send an API GET req. to the Twitch api for a "channel is live" status -
then push out a message with a _notification role_ mention in a specified channel.
