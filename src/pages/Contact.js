import React from "react";

const Contact = () => {
    return (
        <div className="container bg-white p-4 wrapper" style={{maxWidth: "640px", margin: "4% auto"}}>
            <section className="bottomBorder pb-3">
                <h2 className="textGreen">Contact</h2>
            </section>
            <div name="details">
                <br />
                <p>Email: blakestickland@gmail.com</p>
                <p>Phone: +61-417-793-053</p>
            </div>
            
            <form className="mt-4">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="name" className="form-control" id="exampleInputName1" aria-describedby="name" placeholder="John Smith" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                </div>
                <button type="submit" className="btn bgGreen text-white rounded-0" value="Submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;