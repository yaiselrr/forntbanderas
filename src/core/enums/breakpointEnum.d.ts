export declare enum sizeEnum {
    XS = "XS",
    SM = "SM",
    MD = "MD",
    LG = "LG",
    XL = "XL",
    XXL = "XXL"
}
export declare enum screenEnum {
    XS = 480,
    SM = 576,
    MD = 768,
    LG = 992,
    XL = 1200,
    XXL = 1600
}
declare const screenMap: Map<sizeEnum, number>;
export { screenMap };
