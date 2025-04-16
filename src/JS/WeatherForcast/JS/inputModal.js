import React, { useState } from 'react';

function InputModal({onCitySubmit, modalId = 'inputModal', title = 'Enter Your Input' }) {
        const [inputCity, setInputCity] = useState('');
        const $ = window.jQuery;
      
        const handleSubmit = async () => {
          $('#cityInput').removeClass('error');
            if (inputCity.trim() === '') {
              $('#cityInput').addClass('error');
              $('#errMsg').removeClass('hide');
              return;
            };
            if(!$('#errMsg').hasClass('hide')){
              $('#errMsg').addClass('hide');
            }
            if (document.activeElement) {
              document.activeElement.blur();
            }
            await onCitySubmit(inputCity); // send city to parent
            const modalEl = document.getElementById(modalId);
            const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
            if (modalInstance) modalInstance.hide();
          };
  return (
    <div className="modal fade" id={modalId} tabIndex="-1" aria-labelledby={`${modalId}Label`} aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title" id={`${modalId}Label`}>{title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body">
            <input
              type="text"
              className="form-control"
              placeholder="Enter City Name Only"
              value={inputCity} onChange={(e) => setInputCity(e.target.value)}
              id='cityInput'
            />
            <div className='row'>
              <div id="errMsg" className='col-md-12 col-lg-12 hide errMsgDiv'>
                Please Enter City Name
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary"
              onClick={(e) => {
                handleSubmit();
              }}
            >
            Search</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default InputModal;
