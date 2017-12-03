const showMarkedPoints = (roll) => {
  const points = Array.from(document.getElementsByClassName('point'));
  switch(roll) {
    case 1: show(points, 4); break;
    case 2: show(points, 0, 8); break;
    case 3: show(points, 0, 4, 8); break;
    case 4: show(points, 0, 2, 6, 8); break;
    case 5: show(points, 0, 2, 4, 6, 8); break;
    case 6: show(points, 0, 1, 2, 6, 7, 8); break;
  }
}

const show = (points, ...toShow) => {
  points.forEach((point, index) => {
    for ( const toShowIndex of toShow) {
      if (index === toShowIndex) {
        point.classList.remove('hidden');
        break;
      }
    }
  })
}

const hideAll = () => {
  const points = Array.from(document.getElementsByClassName('point'));
  points.forEach((point) => {
    point.classList.add('hidden');
  })
}

const pointsHandler = { showMarkedPoints, hideAll};
export default pointsHandler;
