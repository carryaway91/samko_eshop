import { Form, Input } from './UserDetailsStyles'

const UserDetails = () => {
    return (
        <div style={{ alignSelf: 'baseline'}}>
            <Form>
                <div className="flex">
                    <label for="fName">Krstné meno
                    <Input type="text" name="firstName" placeholder="Ján" id="fName"/>
                    </label>
                    <label for="lName">Priezvisko
                    <Input type="text" name="lastName" placeholder="Nový" id="lName"/>
                    </label>
                </div>

                <div className="flex">
                    <label for="phone">Telefónne číslo
                    <Input type="text" name="phone" placeholder="+421 xxx xxx xxx" id="phone"/>
                    </label>
                    <label for="email">Emailová adresa
                    <Input type="email" name="email" placeholder="jan.novy@gmail.com" id="email"/>
                    </label>
                </div>
                <div className="flex">
                <label for="address">Adresa a číslo
                    <Input type="text" name="address_line" placeholder="Nová ulica 35" id="address"/>
                </label>
                    <label for="city">Mesto
                    <Input type="text" name="city" placeholder="Nitra" id="city"/>
                    </label>
                </div>
                <div className="flex">
                    <label for="country">Štát
                    <Input type="text" name="country" placeholder="Slovensko" id="country"/>
                    </label>
                    <label for="zip">Smerovacie číslo
                    <Input type="text" name="zip_code" placeholder="00 000" id="zip"/>
                    </label>
                </div>
            </Form>
        </div>
    )
}

export default UserDetails