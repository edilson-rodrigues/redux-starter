/* 

2.We have a recipe object as follows: 
recipe = { 
  name: “Spaghetti Bolognese”, 
  ingredients: [“egg”, “salt”] 
} 

Assuming that this object is immutable, write code to  

-Add a new ingredient (“cream”) 
-Replace “egg” with “egg white” 
-Remove an ingredient (“egg”)


*/


const recipe = {
  name: "Spaghetti Bolognese",
  ingredients: ["egg", "salt"]
};

// add an ingredient
const added = {
  ...recipe,
  ingredients: [...recipe.ingredients, "cream"]
};

console.log('added', added);

// update an ingredient
const updated = {
  ...recipe,
  ingredients: recipe.ingredients.map(ingredient =>
    ingredient === "egg" ?
      "egg white" :
      ingredient
  )
}

console.log('updated', updated);

//remove an ingredient

const removed = {
  ...recipe,
  ingredients: recipe.ingredients.filter(ingredient => ingredient !== "egg")
};

console.log('removed', removed);
