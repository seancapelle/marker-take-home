declare module 'marker-project'{
    export interface MapData {
        "id": number;
        "title": string;
        "description": string;
        "latitude": float;
        "longitude": float;
        "hasVideo"?: true;
        "hasAttachment"?: true;
        "createdDate": string;
        "lastUpdated": string;
    }
}