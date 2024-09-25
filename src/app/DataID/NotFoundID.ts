import NotFoundData from './NotFoundID.json';

const NotFoundID = {
    url: NotFoundUrl(),
    title: NotFoundData[0].title,
};

function NotFoundUrl(length: number = 12): string {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

export default NotFoundID;
