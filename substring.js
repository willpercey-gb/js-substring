export const substring = (document, start, end) => {
    let start_pos, end_pos;
    document = String(document);
    if (!start) {
        start_pos = 0;
    } else {
        start_pos = document.indexOf(start);
    }
    if (end) {
        end_pos = document.indexOf(end);
    } else {
        end_pos = document.length;
    }
    if (start_pos === -1) {
        start_pos = 0;
    } else {
        start_pos += start.length;
    }
    if (end_pos === -1) {
        end_pos = 0;
    }
    return document.substring(start_pos, end_pos);
};
