import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import axios from 'axios'
import { AddressSection } from '../../components/Footer/style';

const Profile = () => {
    const [user, setUser] = useState ({})

    
    useEffect(() => {
        const getUser = () =>{
            axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile', {
                headers: {
                    auth:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlZSb3hQaFc3M2ZMRHNWMTd4RHRlIiwibmFtZSI6IkZsYXZpYSIsImVtYWlsIjoiZmxhdmlhQGdtYWlsLmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTE5IiwiaGFzQWRkcmVzcyI6ZmFsc2UsImlhdCI6MTYwMjExNDM0Nn0.8fRzuhcfo3z10vH-tqWyEorPPe3ELENCUAQ0K1FxEFY"
                }
            }).then(response => {
                setUser(response.data.user)
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
        } 
        getUser()
    }, []);

    return (
        <div>
            <main>
                <section>
                  <p> { user.name } </p>
                  <p> { user.email } </p>
                  <p> { user.cpf } </p>
                </section>
                <AddressSection>
                    <p>endereço</p>
                </AddressSection>
                <section>
                    
                </section>
            </main>
            <Footer/>
        </div>
        
    )
}
export default Profile