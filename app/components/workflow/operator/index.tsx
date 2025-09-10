import { memo } from 'react'
import { MiniMap } from 'reactflow'
import Divider from '../../base/divider'
import UndoRedo from '../header/undo-redo'
import ZoomInOut from './zoom-in-out'
import Control from './control'

export type OperatorProps = {
  handleUndo: () => void
  handleRedo: () => void
}

const Operator = ({ handleUndo, handleRedo }: OperatorProps) => {
  return (
    <>
      <MiniMap
        style={{
          width: 102,
          height: 72,
        }}
        maskColor='var(--color-workflow-minimap-bg)'
        className='!absolute !right-4 !bottom-14 z-[9] !m-0 !w-[102px] !h-[72px] !border-[0.5px] !border-divider-subtle
        !rounded-lg !shadow-md !shadow-shadow-shadow-5 !bg-background-default-subtle'
      />
      <div className='flex items-center mt-1 absolute right-4 bottom-4 z-[9] bg-components-actionbar-bg rounded-lg'>
        <ZoomInOut />
         <Divider type='vertical' className="h-3.5 mx-0.5" />
        <UndoRedo handleUndo={handleUndo} handleRedo={handleRedo} />
        <Control />
      </div>
    </>
  )
}

export default memo(Operator)
