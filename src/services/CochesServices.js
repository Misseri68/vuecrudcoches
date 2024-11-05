import Global from './../Global'

export default class CochesServices {
    api = Global.urlCoches

    getCoches = new Promise(resolve => {
        let url = this.api + "api/coches";
        fetch(url).then(response => {
            return response.json()
        }).then(resolve)
    })

    findCoche(idCoche) {
        return new Promise(resolve => {
            let url = this.api + "api/coches/findcoche/" + idCoche;
            console.log(url)
            fetch(url).then(response => {
                return response.json();
            }).then(resolve)
        })
    }


    /*Se haría así sin el (.then(resolve) directamente.)
            }).then(respuestaJSON => 
                resolve(respuestaJSON)
            )   
    */

    createCoche(coche){
        return new Promise(resolve=>{
            let url = this.api + "api/coches/insertCoche";
            fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"  
                },
                body: JSON.stringify(coche)
            }).then(response=> {
                resolve(response.statusText)
                
            })
        })
    }

    updateCoche(coche){
        return new Promise(resolve=>{
            let url = this.api + "api/coches/updatecoche";
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(coche),
                headers: {
                    "Content-Type": "application/json"  
                }
            }).then(response=> resolve(response.statusText))
        })
    }

    deleteCoche(idCoche){
        return new Promise(resolve=>{
            let url = this.api + "api/coches/deletecoche/" + idCoche;
            fetch(url).then(response=> resolve(response.statusText))
        })
    }



}

