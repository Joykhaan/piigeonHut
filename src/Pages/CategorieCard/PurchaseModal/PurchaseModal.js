import React, { useContext } from 'react';
import { AuthContext } from '../../../ContextApi/Authprovider/Authprovider';

const PurchaseModal = ({ productCard, setproductCard}) => {
    const { Brand, id, picture, ProductName, Location, resalePrice, originalPrice, useYears, postedTime, sellerName } = productCard;

    const { user } = useContext(AuthContext);
    const handleBookingForm = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const number = form.number.value;
        const location = form.location.value;

        console.log(name,email,price,number,location)
        setproductCard(null)

    }


    return (
        <div>


            {/* The button to open modal */}
            {/* <label htmlFor="my-modal-3" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{id}</h3>

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