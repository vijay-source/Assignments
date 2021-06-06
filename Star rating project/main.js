class myRating extends HTMLElement {

// retuen all the attributes which needs to be monitored 
    static get observedAttributes(){
        return ["current","from"]
    }
 // executed when each time changes has bee occured
    attributeChangedCallback(name,oldval,newval){
     
        if(name=="from"){
            this.render()
        }
    }
  render() {
    let present = this.getAttribute("current");
    console.log("my present value is:" + present);
    let total = this.getAttribute("from");
    console.log("my total value is:" + total);
    let minimal = this.getAttribute("min");
    console.log("the minimum value is:" + minimal);

    let rating = ((+present - +minimal) * 5) / (+total - +minimal);
    console.log(present);
    console.log("the rating value is:" + rating);

    let value = Math.floor(rating);

    var template = "";
    for (let i = 0; i < value; i++) {
      template += `<i class="fa fa-star" aria-hidden="true"></i>`;
    }

    if (+rating % 1)
      template += `<i class="fa fa-star-half" aria-hidden="true" ></i>`;
    this.innerHTML = template;
  }

  constructor() {
    super();
    this.render();
  }
}

window.customElements.define("my-rating", myRating); //making component by using class
