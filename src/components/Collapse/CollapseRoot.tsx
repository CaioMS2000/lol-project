import {
	HTMLProps,
	PropsWithChildren,
	Fragment,
	ReactElement,
	isValidElement,
	ReactNode,
	Children,
  } from "react";
  
  interface CollapseRootProps extends HTMLProps<HTMLDivElement> {
	closable?: boolean;
	children: ReactNode;
  }
  
  export default function CollapseRoot({
	children,
	className,
	closable = false,
	...rest
  }: CollapseRootProps) {
	return (
	  <>
		<div {...rest} tabIndex={0} className={"collapse " + className}>
		  {closable && <input type="checkbox" />}
  
		  {Children.toArray(children).map((child, index) => {
			if (isValidElement(child) && typeof child?.type != "string") {
			  console.log(child.type.name);
			}
  
			return <Fragment key={index}>{child}</Fragment>;
		  })}
		</div>
	  </>
	);
  }
  