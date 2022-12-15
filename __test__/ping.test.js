const ping = require('../discord')

describe('Discord', () => {
    it('should dm the user', async () => {
        const channelMock = {
            send: jest.fn()
        }
        const message = {
            delete: jest.fn().mockResolvedValue({}),
            author: {
                createDM: jest.fn().mockResolvedValue(channelMock)
            },
            reply: jest.fn()
        }
        await ping(message)
        expect(message.delete).toHaveBeenCalled()
        expect(channelMock.send).toHaveBeenCalledWith('ping')
    })

    it('should dm the user if dm deactivated', async () => {
        const channelMock = {
            send: jest.fn()
        }
        const message = {
            delete: jest.fn().mockResolvedValue({}),
            author: {
                createDM: jest.fn().mockRejectedValue()
            },
            reply: jest.fn()
        }
        await ping(message)
        expect(message.delete).toHaveBeenCalled()
        expect(message.reply).toHaveBeenCalledWith('pong')
    })

})