// import { useQuery } from 'react-query';
import { useQuery } from '@tanstack/react-query';
import { FaTrash, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/UseAxiosSecure';



const AllUsers = () => {
        const [axiosSecure] = useAxiosSecure();


    // // TenStack-Query 
    // const { isPending, error, data, refetch } = useQuery({
    //     queryKey: ['repoData'],
    //     queryFn: () =>
    //         fetch('http://localhost:5000/users').then(
    //             (res) => res.json(),
    //         ),
    // })

        // TenStack-Query 
    const { isPending, error, data, refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            axiosSecure.get('/users').then(
                (res) => res.data,
            ),
    })


    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    //TenStack-Query End

    // Admin Function Working Start
    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Made Admin",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    //Admin Function Working End
    return (
        <div>
            {data.length}

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((user, index) => <tr key={user._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.email}
                                </td>

                                <td>
                                    {/* Admin make button */}
                                    {
                                        user.role === 'admin' ? 'Admin' :
                                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600 text-white"><FaUserShield /></button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white"><FaTrash /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default AllUsers;