const ping = (message) => {
    message.delete().catch(console.error)
    return message.author.createDM()
        .then(ch => ch.send('ping'))
        .catch(() => message.reply('pong'))
}

module.exports = ping