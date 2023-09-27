import React from "react";
import Layout from "../components/layout/Layout";
import { ArrowRight } from "@phosphor-icons/react";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <h1 className="heading-01 text-primary-400">Tutor</h1>
        <button style={{padding: "5rem"}} className="bg-secondary-600 text-white">Button</button>
        <p className="body-lg-400">Hello</p>
        <p className="body-lg-500">Hello</p>
        <p className="body-lg-600">Hello</p>
        <button className="btn-sm btn-primary secondary">Submit</button>
        <button className="btn btn-secondary secondary">Submit</button>
        <button className="btn btn-secondary gray disabled">Submit</button>


        <div style={{marginLeft: 10}}>
          <button className="icon-btn icon-btn-primary primary">
            <ArrowRight />
          </button>
          <button className="icon-btn icon-btn-primary secondary">
            <ArrowRight />
          </button>
          <button className="icon-btn icon-btn-primary gray">
            <ArrowRight />
          </button>
          <button className="icon-btn icon-btn-primary success">
            <ArrowRight />
          </button>
          <button className="icon-btn icon-btn-primary warning">
            <ArrowRight />
          </button>
          <button className="icon-btn icon-btn-primary error">
            <ArrowRight />
          </button>
          <p class="body-xxl-600">Secondary Buttons</p>
          <button className="icon-btn icon-btn-secondary primary">
            <ArrowRight />
          </button>
          <button className="icon-btn icon-btn-secondary secondary">
            <ArrowRight />
          </button>
          <button className="icon-btn icon-btn-secondary gray">
            <ArrowRight />
          </button>
          <button className="icon-btn icon-btn-secondary success">
            <ArrowRight />
          </button>
          <button className="icon-btn icon-btn-secondary warning">
            <ArrowRight />
          </button>
          <button className="icon-btn icon-btn-secondary error">
            <ArrowRight />
          </button>
        </div>

        <div style={{marginLeft: 10}}>
          <a href="#" className="btn-link-lg btn-link-primary">Normal <ArrowRight /></a>
          <a href="#" className="btn-link-lg btn-link-secondary">Normal <ArrowRight /></a>
          <a href="#" className="btn-link-lg btn-link-gray">Normal <ArrowRight /></a>
          <a href="#" className="btn-link-lg btn-link-success">Normal <ArrowRight /></a>
          <a href="#" className="btn-link-lg btn-link-warning">Normal <ArrowRight /></a>
          <a href="#" className="btn-link-lg btn-link-error">Normal <ArrowRight /></a>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
