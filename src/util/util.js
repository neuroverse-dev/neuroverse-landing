import toast from 'react-hot-toast';

export const toastText = (message, type) => {
	switch (type) {
		case 'success':
			toast.success(message, {
				style: {
					fontSize: '16px',
				},
			});

			break;

		case 'error':
			toast.error(message, {
				style: {
					fontSize: '16px',
				},
			});
			break;
	}
};