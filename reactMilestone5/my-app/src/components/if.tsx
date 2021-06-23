

const If=(props:any)=>{
    if(props.condition){
        return props.children
    }
    else{
        return null;
    }
}
export default If;