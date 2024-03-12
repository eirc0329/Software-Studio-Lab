export function getMoodIcon(group) {
    switch (group) {
        case 'Happy':
            return 'fas fa-smile';
        case 'Sad':
            return 'fa fa-sad-tear';
        case 'Fear':
            return 'fas fa-grimace'
        default:
            return 'fa fa-question-circle';
    }
}

export function getMoodUrl(group) {
    switch (group) {
       // TODO: Set preset pictures. [Ex:./images/faces/(PictureName).(png/.jpg)]
        case 'Happy':
            return 'faces/happy.png';
        case 'Sad':
            return 'faces/sad.png';
        case 'Fear':
            return 'faces/fear.png';
        default:
            return 'fa fa-question-circle';
    }
}