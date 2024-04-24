const make_shirt = (size: string = 'Large', message: string = 'I love TypeScript'): void => {
    console.log(`Size: ${size}, Message: "${message}"`);
};

// Large shirt with default message
make_shirt();

// Medium shirt with default message
make_shirt('Medium');

// Small shirt with a different message
make_shirt('Small', 'I love Coding!');
