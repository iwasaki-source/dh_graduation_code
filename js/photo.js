//シャッフル関数
function shuffleArray(array) {
  let currentIndex = array.length;
  let randomIndex, tempVale;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    tempVale = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempVale;
  }
  return array;
}

const Gallery = {
  data() {
    return {
    category: 'ALL',
    projects:[
      {title:'ウェディング', image:"images/photograph_wedding_001.png", category: 'Wedding'},
      {title: 'マタニティ', image:"images/photograph_maternity_001.png", category: 'Maternity'},
      {title: '家族写真', image:"images/photograph_family_001.png", category: 'Family'},
      {title: '七五三', image: "images/photograph_shichigosan_001.png", category: 'Shichigosan'},
      {title: '七五三', image: "images/photograph_shichigosan_002.png", category: 'Shichigosan'},
      {title: '子ども', image:"images/photograph_child_001.png", category: 'Child'},
      {title: '料理', image:"images/photograph_food_001.png", category: 'Food'},
      {title: '建築', image:"images/photograph_architecture_001.png", category: 'Architecture'},
      {title: 'ウェディング', image:"images/photograph_wedding_002.png", category: 'Wedding'},
      {title: 'マタニティ', image:"images/photograph_maternity_002.png", category: 'Maternity'},
      {title: 'マタニティ', image:"images/photograph_maternity_003.png", category: 'Maternity'},
      {title: 'マタニティ', image:"images/photograph_maternity_004.png", category: 'Maternity'},
      {title: 'マタニティ', image:"images/photograph_maternity_005.png", category: 'Maternity'},
      {title: 'マタニティ', image:"images/photograph_maternity_006.png", category: 'Maternity'},
      {title: '家族写真', image:"images/photograph_family_002.png", category: 'Family'},
      {title: '子ども', image:"images/photograph_child_002.png", category: 'Child'},
      {title: 'ウェディング', image:"images/photograph_wedding_003.png", category: 'Wedding'},
      {title: '料理', image:"images/photograph_food_002.png", category: 'Food'},
      {title: '料理', image:"images/photograph_food_003.png", category: 'Food'},
      {title: '料理', image:"images/photograph_food_004.png", category: 'Food'},
      {title: '料理', image:"images/photograph_food_005.png", category: 'Food'},
      {title: '料理', image:"images/photograph_food_006.png", category: 'Food'},
      {title: '建築', image:"images/photograph_architecture_002.png", category: 'Architecture'},
      {title: '建築', image:"images/photograph_architecture_003.png", category: 'Architecture'},
      {title: '建築', image:"images/photograph_architecture_004.png", category: 'Architecture'},
      {title: '建築', image:"images/photograph_architecture_005.png", category: 'Architecture'},
      {title: '建築', image:"images/photograph_architecture_006.png", category: 'Architecture'},
      {title: '建築', image:"images/photograph_architecture_007.png", category: 'Architecture'},
      {title: '建築', image:"images/photograph_architecture_008.png", category: 'Architecture'},
      {title: '建築', image:"images/photograph_architecture_009.png", category: 'Architecture'},
     ]
   };
  },
  computed: {

  //   filterByCategory: function () {
  //     return this.projects.filter(
  //       (image) => !image.category.indexOf(this.category)
  //     );
  //  }

  filterByCategory: function () {
    if (this.category === 'ALL') {
      return shuffleArray(this.projects);
    } else {
      return shuffleArray(
      this.projects.filter((image) => image.category === this.category)
      )      
    }
  }
  
  }
};

Vue.createApp(Gallery).mount("#app");