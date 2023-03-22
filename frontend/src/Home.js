import './App.css';
import React from 'react';

function Hello({ name }) {
  return (
    <div id="surgeons">
        <h2>Surgeons</h2>
      <ul class="surgeon-list">
        <li>
          <h2> Braiden </h2>
          <p>
            Expertise:
            <span class="expertise">Brain</span>
          </p>
          <p>
            Best Day:
            <span class="best-day">Wednesday</span>
          </p>
          <ul class="button-list">
            <li>
              <button type="button" class="button-primary">
                View Schedule
              </button>
            </li>
            <li>
              <button type="button" class="button-primary">
                Assign Surgery
              </button>
            </li>
            <li>
              <button type="button" class="button-primary">
                Pending Surgeries
              </button>
            </li>
            <li>
              <button type="button" class="button-primary">
                Rejected Surgeries
              </button>
            </li>
          </ul>
        </li>
        <li>
          <h2> Jack </h2>
          <p>
          Expertise:
            <span class="expertise">Lungs</span>
          </p>
          <p>
            Best Day:
            <span class="best-day">Thursday</span>
          </p>
          <ul class="button-list">
            <li>
              <button type="button" class="button-primary">
                View Schedule
              </button>
            </li>
            <li>
              <button type="button" class="button-primary">
                Assign Surgery
              </button>
            </li>
            <li>
              <button type="button" class="button-primary">
                Pending Surgeries
              </button>
            </li>
            <li>
              <button type="button" class="button-primary">
                Rejected Surgeries
              </button>
            </li>
          </ul>
        </li>
        <li>
          <h2> Miles </h2>
          <p>
          Expertise:
            <span class="expertise">Heart</span>
          </p>
          <p>
            Best Day:
            <span class="best-day">Tuesday</span>
          </p>
          <ul class="button-list">
            <li>
              <button type="button" class="button-primary">
                View Schedule
              </button>
            </li>
            <li>
              <button type="button" class="button-primary">
                Assign Surgery
              </button>
            </li>
            <li>
              <button type="button" class="button-primary">
                Pending Surgeries
              </button>
            </li>
            <li>
              <button type="button" class="button-primary">
                Rejected Surgeries
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Hello;