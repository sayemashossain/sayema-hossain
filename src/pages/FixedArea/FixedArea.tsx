export const FixedArea = () => {
    return (
        <div
            style={{
                width: '30%',
                position: 'fixed',
            }}
        >
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '4px',
                }}
            >
                <div>Name</div>
                <div>Title</div>
                <div>Description</div>

                <div>Navigation1</div>
                <div>Navigation2</div>
                <div>Navigation3</div>
            </div>
        </div>
    );
};
