// before
const size = books.size || 10;

// now
const size = books.size ?? 10;

// before
const name = txtName ? txtName.value : undefined;

// now
const name = txtName?.value;

const customerCity = purchase?.customer?.address?.city;
const fullName = user.getFullName?.();