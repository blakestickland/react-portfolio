import React from "react";

const Contact = () => {
    return (
        <div class="container bg-white p-4 wrapper" style={{maxWidth: "640px", margin: "4% auto"}}>
            <section class="bottomBorder pb-3">
                <h2 class="textGreen">Contact</h2>
            </section>
            <div name="details">
                <br />
                <p>Email: blakestickland@gmail.com</p>
                <p>Phone: +61-417-793-053</p>
            </div>
            
            <form class="mt-4">
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="name" class="form-control" id="exampleInputName1" aria-describedby="name" placeholder="John Smith" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                </div>
                <button type="submit" class="btn bgGreen text-white rounded-0" value="Submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;