export declare enum SocialMedia {
    SQUARE = "Square",
    INSTAGRAM = "Instagram",
    TWITTER = "Twitter",
    FACEBOOK = "Facebook",
    GOOGLE = "Google",
    SKYPE = "Skype",
    SPOTIFY = "Spotify",
    REDDIT = "Reddit",
    TUMBLR = "Tumblr",
    EXPEDIA = "Expedia",
    DROPBOX = "Dropbox",
    AMAZON = "Amazon",
    PINTEREST = "Pinterest",
    NETFLIX = "Netflix",
    FOURSQUARE = "Foursquare",
    BATTLE_NET = "Battle.net",
    STEAM = "Steam",
    ACADEMIA_EDU = "Academia.edu",
    STACK_OVERFLOW = "Stack Overflow",
    BLOGGER = "Blogger"
}
export interface Config {
    extractLocation?: boolean;
}
export interface UserLocation {
    latitude: number;
    longitude: number;
}
export interface UserPlatform {
    name?: string;
    version?: string;
    layout?: string;
    os: {
        architecture?: number;
        family?: string;
        version?: string;
    };
    description?: string;
    product?: string;
    manufacturer?: string;
}
export interface UserHardware {
    vendor?: string;
    renderer?: string;
    screenWidth: number;
    screenHeight: number;
    battery?: {
        level?: number;
        charging?: boolean;
    };
}
export interface UserData {
    connectedSocialMedias: SocialMedia[];
    location?: UserLocation;
    referrer?: string;
    platform?: Partial<UserPlatform>;
    hardware?: Partial<UserHardware>;
}
