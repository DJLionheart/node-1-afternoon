let messages = [];
id = 0;

module.exports = {
    create: (req, res) => {
        let { text, time } = req.body;
        messages.push({
            id: id,
            text: text,
            time: time
        });
        id++;
        res.status(200).send(messages);
        console.log('A message hath been created...')
    },

    read: (req, res) => {
        res.status(200).send(messages);
        console.log('Thine glorious writings hath been displayed...');
    },

    update: (req, res) => {
        let { text } = req.body;
        let filteredMessages = messages.filter( (message, i) => {
            if(message.id === +req.params.id) return true;
        });
        filteredMessages[0] = {
            id: +req.params.id,
            text: text || filteredMessages[0].text,
            date: filteredMessages[0].date
        };
        messages[req.params.id] = filteredMessages[0]
        res.status(200).send(messages);
        console.log('One of thine messages hath been changed...')
    },
    
    delete: (req, res) => {
        let index = null;
        messages.forEach( (message, i) => {
            if(message.id === +req.params.id) index = i;
        })
        messages.splice(index, 1);
        res.status(200).send(messages);
        console.log('What ho, one of thine precious writings hath been destroyed!');
    }
    
}