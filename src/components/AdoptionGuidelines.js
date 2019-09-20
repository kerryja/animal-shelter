import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Adopt.css";

class AdoptionGuidelines extends Component {
  render() {
    return (
      <div className="container text-sm-center text-md-left">
        <div>
          <h1 className="heading">Adoption Guidelines</h1>
          <hr></hr>
          <p></p>
          <h4>Adoption Fees</h4>
          <p>
            Our adoption fees vary. We are a grass roots 501c3 organization
            privately funded by donations and the adoption fees. We are always
            very grateful if you can add a little extra donation to help us
            continue our rescue work. Many of the dogs we take in have special
            needs and theirs costs exceed the adoption donation, so your
            donations help us to support those special dogs.
          </p>
          <table class="table">
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <span>Senior Dogs</span> (9 years and older)
                </td>
                <td>$300</td>
              </tr>
              <tr>
                <td>
                  <span>Adult Dogs</span> (older than 1 year)
                </td>
                <td>$425</td>
              </tr>
              <tr>
                <td>
                  <span>Adolescent Dogs</span> (7-11 months old)
                </td>
                <td>$450</td>
              </tr>
              <tr>
                <td>
                  <span>Puppies</span> (6 months and under)
                </td>
                <td>
                  $550{" "}
                  <em>
                    ($50 rebated after you send us spay/neuter certificate)
                  </em>
                </td>
              </tr>
            </tbody>
          </table>
          <h4>If we request a home visit:</h4>
          <p>
            During the adoption screening, we will determine if a home visit is
            needed. If we request a home visit, we will schedule a time to come
            out to do a safety inspection of the home. The reason for the home
            visit is to make sure that you can provide a safe environment for
            the dog and to make sure the dog you want is the right match for
            your family. We also ask that other family members or people who
            live in the household be present so that we can meet them and answer
            any questions about dog ownership. After the home visit, the person
            conducting the home visit will provide the report to a board member,
            who will approve the adoption. Once the home visit is completed and
            approved, we will contact you to pick up the dog within 24 hours. We
            are not set up to hold dogs beyond that point.
          </p>
          <h4>Geographical areas we serve</h4>
          <p>
            While we have adopted dogs all over the New England region including
            the New York border, if we have multiple applicants for a particular
            puppy or dog, we give first preference to applicants who are in
            neighboring towns. For puppies especially, we like to adopt to local
            families as we offer Puppy Kindergarten classes at a discount rate
            to our adopters, where all the puppies from the same litter, for
            example, can attend a class together and play with their siblings.
            It is an easier transition for the litter mates if they can play
            together with pups familiar to them and similar in size and age. If
            you are located out of our service area, say over 25 miles away, and
            you are open to a variety of dogs, we welcome you to apply. If you
            see a dog on our website who has been at the shelter for a while,
            please know that we are willing to "go the extra mile" and will
            receive applications from afar. Please understand that "same day
            adoptions" are not our practice so you will need to be prepared to
            come back the following day to adopt any dog or pup that you put a
            deposit on.
          </p>
          <hr></hr>
          <h3 className="heading2">Guidelines for Adopting Puppies</h3>
          <p>
            Young puppies need lots of socialization. The rule of thumb is that
            the pup should not be left alone for more than one hour for every
            month of age. For example, a 2-month-old puppy should not be left
            for more than two hours, a 3-month-old for three hours, and so on.
            Obviously, you cannot leave an 8-month-old for 8 hours, as that is
            too long to spend in a crate and the dog will need to be walked
            mid-day.
          </p>
          <h4>Crate Training</h4>
          <p>
            We require crate training for puppies. No exceptions! For
            information on crate training basics, please visit{" "}
            <Link to={"/crate-training"}>this page</Link>.
          </p>
          <h4>Working People</h4>
          <p>
            Please bear in mind that puppies need lots of socialization so we
            cannot place them in homes where they will sit alone all day. Even
            coming home for lunch is not enough for a young puppy. Animal
            shelters are loaded with dogs who did not get the proper puppy
            socialization and we do not want to add to the problem. Puppies need
            time and attention. We like to have your dog walker and/or doggy
            daycare information on the application or at some point before we
            call your references. People who can spend the most time with a
            puppy will be given preference and we will consider those with dogs
            already in the household as companionship for an older puppy or
            young dog.
          </p>
          <hr></hr>
          <h3 className="heading2">Our Fencing Requirements</h3>
          <p>
            <em>
              We require a fully fenced in back yard if you have children under
              12 years of age.
            </em>{" "}
            You don't have to break your piggy bank to purchase a fence. In
            fact, there's a fence that we prefer that is very affordable. It
            looks like the fencing{" "}
            <a href="https://www.homedepot.com/b/Lumber-Composites-Fencing-Welded-Wire-Fencing/Green/N-5yc1vZc3lpZ1z0vjoi">
              here
            </a>
            . You can buy this at Home Depot and put it up in an afternoon. We
            like it because it goes flush to the ground so that dogs can't
            squeeze under, as they would with a stockade fence, and they can't
            climb it, as they can with a chain link fence. They can't see over
            it, so they don't tend to jump over it. 4-5' high is adequate for
            most of our dogs.
          </p>
          <h4>Invisible Fences</h4>
          <p>
            Invisible fences are okay in some situations, but they are not our
            favorite choice of fencing. It depends on the dog and on your
            location. You cannot put a puppy on an invisible fence! We are not
            keen on the invisible fence if you live in a neighborhood where lots
            of people walk by, as it frustrates any dog who wants to go and
            greet them. Border Collies and other herding or prey-driven breeds
            in particular, do not do well on invisible fences. The fencing
            companies don't tell you about power outages and the number of
            people who have run over their own dog in the driveway on an
            invisible fence. We suggest doing a lot of research before
            purchasing an invisible fence. They are fine for some dogs and some
            locations, but disastrous for others.
          </p>
          <h4>If you live on a busy road:</h4>
          <p>
            If you live on a busy road, we require a front entry way or
            breezeway at minimum. This is for the dog's safety so that the dog
            doesn't dart out into the street.
          </p>
          <hr></hr>
          <h3 className="heading2">Our Obedience Training Requirements</h3>
          <p id="last-paragraph">
            <em>
              We require obedience training for all dogs under 3 years of age.{" "}
            </em>
            Puppies need Puppy Kindergarten for socialization and for a jump
            start on obedience training. Then at adolescence and beyond, they
            need basic obedience. We offer 3 Puppy K classes for our adopted
            puppies. We offer the class with your puppy's littermates and/or
            other pups that were fostered with your puppy so that they can
            socialize with dogs they already know and who will not overpower
            them. These classes are taught in Sudbury by our volunteer trainers.
            You will receive an email invitation to this class shortly after
            adopting your puppy. We teach using positive-reinforcement and
            reward-based methods.
          </p>
        </div>
      </div>
    );
  }
}

export default AdoptionGuidelines;
