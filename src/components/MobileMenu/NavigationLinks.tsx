import LinkMobileMenu from './LinkMobileMenu';

export type NavigationLinksProps = {
  type: 'header' | 'footer';
};

function NavigationLinks({ type }: NavigationLinksProps) {
  return (
    <>
      {type === 'header' && (
        <LinkMobileMenu href="/" titleLink="home" type={type} />
      )}
      <LinkMobileMenu href="" titleLink="aBout" type={type} />
      <LinkMobileMenu href="" titleLink="shOp" type={type} />
      <LinkMobileMenu href="" titleLink="bOOk classes" type={type} />
      <LinkMobileMenu href="" titleLink="open hourse" type={type} />
      <LinkMobileMenu href="" titleLink="contacts" type={type} />
    </>
  );
}

export default NavigationLinks;
