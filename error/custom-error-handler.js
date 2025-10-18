module.exports = class CustomErrorHandle extends Error {
    constructor(status, message, errors) {
        super(message)
        this.status = status
        this.errors = errors
    }

    static badRequiest(message, errors = []) {
        return new CustomErrorHandle(400, message, errors = [])
    }

    static UnAuthorazed(message, errors = []) {
        return new CustomErrorHandle(401, message, errors = [])
    }

    static Forbidden(message, errors = []) {
        return new CustomErrorHandle(403, message, errors = [])
    }

    static NotFound(message, errors = []) {
        return new CustomErrorHandle(404, message, errors = [])
    }
}