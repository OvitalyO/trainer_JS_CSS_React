const Object = () => {
    const myInfo = {
        name : "Vitaly",
        age : 36,
        greet : function (){
            console.log("Hello my friend " + this.name)
        },
        // greet :  ()=> {
        //     console.log("Hello my friend " + this.name)
        // }, стрелочная функция не имеет своего this
    };
    console.log(myInfo.greet());

    return (
        <div>

        </div>
    );
};

export default Object;
