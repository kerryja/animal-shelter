import React from "react";
import { Link } from "react-router-dom";
import styles from "./Resources.module.css";

function Resources() {
  return (
    <div>
      <div className="container text-sm-center text-md-left">
        <h1 className="heading">Resources for Dog Lovers</h1>
        <hr></hr>
        <ol>
          <li>
            <a
              className={styles.title}
              href="https://www.humanesociety.org/resources/adopting-animal-shelter-or-rescue-group"
              target="blank"
            >
              <p>Adopting from an Animal Shelter - The Humane Society</p>
            </a>
          </li>
          <li>
            <a
              className={styles.title}
              href="https://www.aspca.org/pet-care/animal-poison-control"
              target="blank"
            >
              <p>Animal Poison Control - ASPCA</p>
            </a>
          </li>
          <li>
            <a
              className={styles.title}
              href="https://www.aspca.org/pet-care/animal-poison-control/dogs-plant-list"
              target="blank"
            >
              <p>Toxic and Non-Toxic Plant List - ASPCA</p>
            </a>
          </li>
          <li>
            <a className={styles.title} href="https://apdt.com/" target="blank">
              <p>Association of Professional Dog Trainers</p>
            </a>
          </li>
          <li>
            <Link className={styles.title} to="/intros">
              <p>New Dog/Puppy Introductions</p>
            </Link>
          </li>
          <li>
            <Link className={styles.title} to="/crate-training">
              <p>Crate Training Information</p>
            </Link>
          </li>
        </ol>
      </div>
    </div>
  );
}
export default Resources;
