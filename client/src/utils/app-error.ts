export class AppError extends Error {
    status: number;
    code?: string;

    constructor(
        message: string,
        status: number = 0,
        code?: string
    ) {
        super(message);

        this.name = "AppError";
        this.status = status;
        this.code = code;
    }
}