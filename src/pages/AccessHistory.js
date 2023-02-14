import React from "react";
// AiFillDelete
import { AiFillDelete } from "react-icons/ai";

const AccessHistory = () => {
  return (
    <div>
      <div class="table-box">
        <div class="table-row table-head">
          <div class="table-cell first-cell">
            <p>Request Granted To:</p>
          </div>
          <div class="table-cell">
            <p>Revoke</p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell">
            <p>Insurance Company</p>
          </div>
          <div class="table-cell">
            <p>
              {" "}
              <AiFillDelete />
            </p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell">
            <p>Insurance Company</p>
          </div>
          <div class="table-cell">
            <p>
              {" "}
              <AiFillDelete />
            </p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell">
            <p>Insurance Company</p>
          </div>
          <div class="table-cell">
            <p>
              {" "}
              <AiFillDelete />
            </p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell">
            <p>Insurance Company</p>
          </div>
          <div class="table-cell">
            <p>
              {" "}
              <AiFillDelete />
            </p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell">
            <p>Insurance Company</p>
          </div>
          <div class="table-cell">
            <p>
              {" "}
              <AiFillDelete />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessHistory;
