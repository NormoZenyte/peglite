export type JavaKeyCodes = {
    [key: string]: {
        key: number;
        ch: number;
    };
};

export const KEY_CODES: JavaKeyCodes = {
    Backspace: {key: 8, ch: 8},
    Enter: {key: 10, ch: 10},
    Shift: {key: 16, ch: 65535},
    Escape: {key: 27, ch: 27},
    Tab: {key: 9, ch: 9},
    CapsLock: {key: 20, ch: 65535},
    ' ': {key: 32, ch: 32},

    Control: {key: 17, ch: 65535},
    Alt: {key: 18, ch: 65535},
    Meta: {key: 524, ch: 65535},

    ArrowLeft: {key: 37, ch: 65535},
    ArrowRight: {key: 39, ch: 65535},
    ArrowUp: {key: 38, ch: 65535},
    ArrowDown: {key: 40, ch: 65535},

    Insert: {key: 155, ch: 65535},
    Home: {key: 36, ch: 65535},
    PageUp: {key: 33, ch: 65535},
    Delete: {key: 127, ch: 127},
    End: {key: 35, ch: 65535},
    PageDown: {key: 34, ch: 65535},

    '`': {key: 192, ch: 96},
    '~': {key: 192, ch: 126},
    '!': {key: 49, ch: 33},
    '@': {key: 50, ch: 64},
    '#': {key: 51, ch: 35},
    $: {key: 52, ch: 36},
    '%': {key: 53, ch: 37},
    '^': {key: 54, ch: 94},
    '&': {key: 55, ch: 38},
    '*': {key: 56, ch: 42},
    '(': {key: 57, ch: 40},
    ')': {key: 48, ch: 41},
    '-': {key: 45, ch: 45},
    _: {key: 45, ch: 95},
    '=': {key: 61, ch: 61},
    '+': {key: 61, ch: 43},
    '[': {key: 91, ch: 91},
    '{': {key: 91, ch: 123},
    ']': {key: 93, ch: 93},
    '}': {key: 93, ch: 125},
    '\\': {key: 92, ch: 92},
    '|': {key: 92, ch: 124},
    ';': {key: 59, ch: 59},
    ':': {key: 59, ch: 58},
    "'": {key: 222, ch: 39},
    '"': {key: 222, ch: 34},
    ',': {key: 44, ch: 44},
    '<': {key: 44, ch: 60},
    '.': {key: 46, ch: 46},
    '>': {key: 46, ch: 62},
    '/': {key: 47, ch: 47},
    '?': {key: 47, ch: 63},

    F1: {key: 112, ch: 65535},
    F2: {key: 113, ch: 65535},
    F3: {key: 114, ch: 65535},
    F4: {key: 115, ch: 65535},
    F5: {key: 116, ch: 65535},
    F6: {key: 117, ch: 65535},
    F7: {key: 118, ch: 65535},
    F8: {key: 119, ch: 65535},
    F9: {key: 120, ch: 65535},
    F10: {key: 121, ch: 65535},
    F11: {key: 122, ch: 65535},
    F12: {key: 123, ch: 65535},

    '0': {key: 48, ch: 48},
    '1': {key: 49, ch: 49},
    '2': {key: 50, ch: 50},
    '3': {key: 51, ch: 51},
    '4': {key: 52, ch: 52},
    '5': {key: 53, ch: 53},
    '6': {key: 54, ch: 54},
    '7': {key: 55, ch: 55},
    '8': {key: 56, ch: 56},
    '9': {key: 57, ch: 57},

    a: {key: 65, ch: 97},
    b: {key: 66, ch: 98},
    c: {key: 67, ch: 99},
    d: {key: 68, ch: 100},
    e: {key: 69, ch: 101},
    f: {key: 70, ch: 102},
    g: {key: 71, ch: 103},
    h: {key: 72, ch: 104},
    i: {key: 73, ch: 105},
    j: {key: 74, ch: 106},
    k: {key: 75, ch: 107},
    l: {key: 76, ch: 108},
    m: {key: 77, ch: 109},
    n: {key: 78, ch: 110},
    o: {key: 79, ch: 111},
    p: {key: 80, ch: 112},
    q: {key: 81, ch: 113},
    r: {key: 82, ch: 114},
    s: {key: 83, ch: 115},
    t: {key: 84, ch: 116},
    u: {key: 85, ch: 117},
    v: {key: 86, ch: 118},
    w: {key: 87, ch: 119},
    x: {key: 88, ch: 120},
    y: {key: 89, ch: 121},
    z: {key: 90, ch: 122},

    A: {key: 65, ch: 65},
    B: {key: 66, ch: 66},
    C: {key: 67, ch: 67},
    D: {key: 68, ch: 68},
    E: {key: 69, ch: 69},
    F: {key: 70, ch: 70},
    G: {key: 71, ch: 71},
    H: {key: 72, ch: 72},
    I: {key: 73, ch: 73},
    J: {key: 74, ch: 74},
    K: {key: 75, ch: 75},
    L: {key: 76, ch: 76},
    M: {key: 77, ch: 77},
    N: {key: 78, ch: 78},
    O: {key: 79, ch: 79},
    P: {key: 80, ch: 80},
    Q: {key: 81, ch: 81},
    R: {key: 82, ch: 82},
    S: {key: 83, ch: 83},
    T: {key: 84, ch: 84},
    U: {key: 85, ch: 85},
    V: {key: 86, ch: 86},
    W: {key: 87, ch: 87},
    X: {key: 88, ch: 88},
    Y: {key: 89, ch: 89},
    Z: {key: 90, ch: 90}
};

export const CANVAS_PREVENTED: string[] = ['Tab', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
