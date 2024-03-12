/**
 * Return different emojis which represent three types of mood respectively
 * @param  {String} group The mood (Happy/Sad/Fear)
 * @return {String}       The icon
 */
export function getMoodIcon(group) {
    switch (group) {
        // more icons can be found at https://fontawesome.com/icons
        case 'Happy':
            return 'fa fa-smile';
        case 'Fear':
             return 'fa fa-grimace';
        case 'Sad':
             return 'fa fa-sad-tear';
        default:
            return 'fa fa-fish';
    }
}
