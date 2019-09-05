const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {
  submitForm(req, res, next) {
    const msg1 = {
      to: "kerry.jackson108@gmail.com",
      from: `${req.body.email}`,
      subject: `Adopter Application - ${req.body.name}`,
      text: `Adopter Appllication`,
      html: `<table>
      <h4>Personal:</h4>
      <tr>
          <th>Name:</th>
          <td>${req.body.name}</td>
      </tr>
      <tr>
          <th>Phone</th>
          <td>${req.body.phone}</td>
      </tr>
      <tr>
          <th>Email</th>
          <td>${req.body.email}</td>
      </tr>
      <tr>
          <th>Address</th>
          <td>${req.body.address}</td>
      </tr>
      <tr>
          <th>Address2</th>
          <td>${req.body.address2}</td>
      </tr>
      <tr>
          <th>City</th>
          <td>${req.body.city}</td>
      </tr>
      <tr>
          <th>State</th>
          <td>${req.body.state}</td>
      </tr>
      <tr>
          <th>Occupation</th>
          <td>${req.body.occupation}</td>
      </tr>
      <tr>
          <th>Why do you want to bring a new dog/puppy into your home?</th>
          <td>${req.body.why_adopt}</td>
      </tr>
      <tr>
          <th>Name of dog you are interested in?</th>
          <td>${req.body.dog_name}</td>
      </tr>
      </table>
      <table>
      <h4>References:</h4>
      <tr>
          <th>Reference 1:</th>
          <td>${req.body.reference1}</td>
      </tr>
      <tr>
          <th>Reference 2:</th>
          <td>${req.body.reference2}</td>
      </tr>
      <tr>
          <th>Vet Name:</th>
          <td>${req.body.vet_name}</td>
      </tr>
      <tr>
          <th>Vet Phone:</th>
          <td>${req.body.vet_phone}</td>
      </tr>
      </table>
      <table>
      <h4>References:</h4>
      <tr>
          <th>Employer & Location:</th>
          <td>${req.body.employer}</td>
      </tr>
      <tr>
          <th>Spouse's Employer:</th>
          <td>${req.body.spouse_employer}</td>
      </tr>
      <tr>
          <th>Residence Type:</th>
          <td>${req.body.residence_type}</td>
      </tr>
      <tr>
          <th>Landlord Name (if applicable):</th>
          <td>${req.body.landlord_name}</td>
      </tr>
      <tr>
          <th>Landlord Contact:</th>
          <td>${req.body.landlord_contact}</td>
      </tr>
      <tr>
          <th>Landlord Contact:</th>
          <td>${req.body.landlord_contact}</td>
      </tr>
      <tr>
          <th>Total number of people at home:</th>
          <td>${req.body.total_people_residence}</td>
      </tr>
      <tr>
          <th>Children at home?</th>
          <td>${req.body.children}</td>
      </tr>
      <tr>
          <th>Cats at home?</th>
          <td>${req.body.cats}</td>
      </tr>
      </table>`
    };
    sgMail
      .send(msg1)
      .then(result => {
        console.log(result);
      })
      .catch(sgErr => {
        console.log(sgErr);
      });
    res.redirect("/");
    const msg2 = {
      to: `${req.body.email}`,
      from: "kerry.jackson108@gmail.com",
      subject: `Thank you ${req.body.name}!`,
      text: "Thank you for filling out an adoption form!",
      html: `Thank you, ${req.body.name} for filling out an adoption form with Save A Dog. We will respond to your inquiry within 48 hours. Thank you for your patience and your interest in Save A Dog.`
    };
    sgMail.send(msg2).catch(sgErr => {
      console.log(sgErr);
    });
  }
};
