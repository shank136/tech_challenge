import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1 style={{ color: '#8F8F91', width: '100%', position: 'absolute', paddingTop: '10px' }}>
                {title}
            </h1>
        </header>
    )
}

Header.defaultProps = { title: 'Welcome to World\'s Favorite Radio Station' }

Header.protoTypes = { title: PropTypes.string.isRequired }

export default Header
