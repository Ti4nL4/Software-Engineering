// import { useNavigate } from "react-router";

const StateModal = ({state}) => {

    // const navigate = useNavigate();
    const NONE_STATE = 'NONE';
    const SUCCESS_STATE = 'SUCCESS';
    // const FAIL_STATE = 'FAIL';
    return (
        <div class="modal fade" id="stateModal" tabindex="-1" aria-labelledby="stateModalLabel" aria-hidden="true">
  <div class="modal-dialog mt-5">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="stateModalLabel">TÌNH TRẠNG THANH TOÁN</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        {
            state === NONE_STATE ? "ĐANG THANH TOÁN" : state === SUCCESS_STATE ? "THÀNH CÔNG" : "THẤT BẠI"
        }
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
        {/* <button type="button" class="btn btn-primary" onClick={() => navigate('/menu')}>ĐI ĐẾN TRANG CHỦ</button> */}
      </div>
    </div>
  </div>
</div>
    )
}

export default StateModal;