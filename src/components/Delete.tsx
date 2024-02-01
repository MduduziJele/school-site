import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Delete() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log("ID:", id);
      setShowConfirmation(true);
    };

    fetchData();

    return () => {};
  }, [id]);

  const deleteUser = async () => {
    try {
      setLoading(true);
      await axios.delete(`http://localhost:8080/api/auth/delete/${id}`);
      navigate("/portal/users");
    } catch (error) {
      console.error("Error deleting user:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleConfirm = () => {
    setShowConfirmation(false);
    deleteUser();
  };

  const handleCancel = () => {
    setShowConfirmation(false);
    navigate("/portal/users");
  };

  return (
    <div className="delete-container">
      <div className="border-rounded shadow">
        <h2 className="text-center">Delete User</h2>

        <h5 className="centered-text">
          Are you sure you want to delete this user?
        </h5>

        {showConfirmation && (
          <div className="button-container">
            <button
              type="button"
              className="button button-danger margin-end-two"
              onClick={handleConfirm}
              disabled={loading}
            >
              {loading ? "Deleting..." : "Confirm"}
            </button>
            <button
              type="button"
              className="button button-secondary"
              onClick={handleCancel}
              disabled={loading}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
