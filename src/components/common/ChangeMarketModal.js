import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '../../hooks/useQuery';
import Modal from '../UI/Modal';
import Button from '../UI/Button';
import Divider from '../UI/Divider';

function ChangeMarketModal({ visible, onOk, onCancel }) {
  // eslint-disable-next-line no-unused-vars
  const [parsedQuery, query, setQuery] = useQuery();
  const { market } = parsedQuery || {};

  const markets = [
    { key: 1, title: 'Tokyo Japan', slug: 'Tokyo-Japan' },
    { key: 2, title: 'New York United States', slug: 'New-York-United-States' },
    { key: 3, title: 'London England', slug: 'London-England' },
    { key: 4, title: 'Sydney Australia', slug: 'Sydney-Australia' },
  ];

  return (
    <Modal
      wrapClassName="c-modal-padding-none c-primary-modal"
      closeIconClassName="text-white text-xl"
      onCancel={onCancel}
      onOk={onOk}
      visible={visible}
      switchCloseIcon={false}
      width={220}
    >
      <div className="text-white text-center pt-5">Change Market</div>
      <div className="flex flex-col items-center pb-4 mt-6 mb-6 px-6">
        {markets.map((m, index) => (
          <div key={m.key}>
            <Button
              text={m.title}
              onClick={() => setQuery({ market: m.slug })}
              type="link"
              textClassName={`text-white text-xs ${market === m.slug ? '' : 'text-opacity-60'}`}
            />
            {index !== markets.length - 1 && <Divider className="bg-opacity-5 w-16" />}
          </div>
        ))}
      </div>
    </Modal>
  );
}

ChangeMarketModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};

ChangeMarketModal.defaultProps = {
  onOk: () => {},
};

export default ChangeMarketModal;
