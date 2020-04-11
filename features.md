# Feature list for TeeqBot

This i a document overviewing both planned and developed features.

### Planned features
- [ ] embed handler (?)
- [ ] Support system
    - send in a ticketed msg, when mod team won't reply in a timely manner
- [ ] Mute system
    - on spam (auto detect)
    - on moderation (use of command)
- [ ] role system
    - on moderation (use of command to assign *x-role* to *y-user*)
    - user personalisation (self assigned predefined roles for fun expression)
- [ ] Emote manager
    - submissions
    - moderation
    - role based(trusted users)
- [ ] experience system
    - earn a certain rank
        - grants features like emote management etc.

### Main features
- [x] __Twitch notification__: based on "streaming" presence of user (owner, and/or specified users).
This will push a MessageEmbed to the appointed channel for notifications with the assigned _notification role_ mentions.

- [x] __Base moderation tools__: Kick, ban, unban commands for ease-of-use moderation within the mod team is completed. Additional moderation tools will be implimented. Please refer to the [Commandlist](https://github.com/teequa/TeeqBot/blob/master/commandlist.md), for updated moderation commands. 