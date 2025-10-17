import Link from "next/link"

import { GitHub } from "src/shared/components";

import { useLabels } from "src/services/client";

const StyledKnowMore = 'flex gap-2 items-center [&>p>a]:underline [&>p>a]:underline-offset-4'

const KnowMore = () => {
    const getLabel = useLabels();
    
    return (
        <div className={StyledKnowMore}>
          <p>
            {getLabel("welcome-banner.know-more")} {' '}
            <Link href={"https://github.com/ricardo-fnd/Operating-System-FE"} target="_blank" rel="noopener noreferrer">github</Link>
          </p>
          <GitHub showVersion={false} />
        </div>
    )
};

export default KnowMore;