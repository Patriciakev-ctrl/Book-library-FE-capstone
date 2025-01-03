function FormConnexion() {

    function messageValidation (formData){ 
        const query = formData.get("query");
        alert(`Vous avez recherché « ${name} »`);
        };

    return(
      
        <form action={messageValidation}>
            <input name="name" type="text" placeholder="Username"/>
            <input name="password" type="text" placeholder="Password" />
            <button type="submit" > Connect</button>
        </form>
    );
}

export default FormConnexion;