import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faUserMd, faChild, faBrain, faStethoscope, faUsers, faBuilding } from '@fortawesome/free-solid-svg-icons';

export const ICONS_MAP = {
  "fa fa-user-md": faUserMd,
  "fa fa-child": faChild,
  "fa fa-brain": faBrain,
  "fa fa-stethoscope": faStethoscope,
  "fa fa-users": faUsers,
  "fa fa-building": faBuilding,
};

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nossos Serviços</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4">
                <FontAwesomeIcon
                  icon={ICONS_MAP[d.icon]}
                  size="4x"
                  style={{
                    backgroundColor: '#A0BCB5',
                    color: '#fff',
                    padding: '20px',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    marginBottom: '10px'
                  }}
                />
                <div className="service-desc">
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
