import React from 'react';

const Sidebar = () => {

    const lines = []
    for (let i = 1; i <= 77; i++) {
        lines.push(i);
    }

    return (
        <div className='text-center text-secondary sticky-top'>
            {
                lines.map(line => <div
                    key={line}
                    >
                        {line}
                    </div>
                )
            }
        </div>
    );
};

export default Sidebar;