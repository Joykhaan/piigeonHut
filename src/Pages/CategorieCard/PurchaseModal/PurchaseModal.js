import React, { useContext } from 'react';
import { AuthContext } from '../../../ContextApi/Authprovider/Authprovider';

const PurchaseModal = ({ productCard, setproductCard}) => {
    const { picture, ProductName, resalePrice} = productCard;

    const { user } = useContext(AuthContext);
    const handleBookingForm = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const number = form.number.value;
        const location = form.location.value;
        const itemName = form.itemName.value
        const img = picture
        const uid =user.uid

        
        setproductCard(null)

        const bookingInfo ={
            itemName,
            name,
            email,
            price,
            number,
            location,
            img,
            uid
        }

        fetch('http://localhost:5000/bookinginfo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                
               
                
            })
            .catch(error => console.error(error));

    }


    return (
        <div>


            
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    

                    <div className="hero ">
                        <div className="hero-content flex-col lg:flex-row-reverse">

                            <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                                <form onSubmit={handleBookingForm}>
                                    <div className="card-body">
                                        <div className="form-control">

                                            <input type="text"
                                                name='name'
                                                placeholder="Your Name" className="input input-bordered"
                                                value={user?.displayName}
                                                disabled
                                            />
                                        </div>
                                        <div className="form-control">
                                            <input type="text"
                                                name='email'
                                                placeholder="Your Email"
                                                value={user?.email}
                                                disabled
                                                className="input input-bordered" />

                                        </div>
                                        <div className="form-control">
                                            <input type="text"
                                                name='itemName'
                                                placeholder="Product Price"
                                                value={ProductName}
                                                disabled
                                                className="input input-bordered" />

                                        </div>
                                        <div className="form-control">
                                            <input type="text"
                                                name='price'
                                                placeholder="Product Price"
                                                value={resalePrice}
                                                disabled
                                                className="input input-bordered" />

                                        </div>
                                        <div className="form-control">
                                            <input type="text"
                                                name='number'
                                                placeholder="Phone Number" className="input input-bordered" />

                                        </div>
                                        <div className="form-control">
                                            <input type="text"
                                                name='location'
                                                placeholder="Meeting Location" className="input input-bordered" />

                                        </div>
                                        <div className="form-control mt-6">
                                            <button className="btn btn-primary">Submit</button>
                                        </div>
                                    
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;