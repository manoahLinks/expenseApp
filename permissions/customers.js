exports.canViewCustomer = (user, customer) => {
    return (
        user.role === 'admin' || customer.createdBy === user._id
    )
}

module.exports = exports